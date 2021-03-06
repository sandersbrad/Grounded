# == Schema Information
#
# Table name: properties
#
#  id            :integer          not null, primary key
#  street_number :string           not null
#  unit          :string
#  street        :string           not null
#  city          :string           not null
#  state         :string           not null
#  zip           :string           not null
#  description   :text
#  num_beds      :integer
#  num_baths     :integer
#  price         :integer
#  property_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  latitude      :float
#  longitude     :float
#  zpid          :string
#  initial       :boolean
#  user_id       :integer
#

class Property < ActiveRecord::Base
  require 'uri'

  validates :street_number, :street, :city, :state, presence: true
  validates_uniqueness_of :street_number, scope: :street

  has_many :follows
  has_many :investments
  has_many :images

  has_many :followers, through: :follows, source: :user
  has_many :investors, through: :investments, source: :user

  geocoded_by :full_street_address
  after_initialize :fill_in_address
  after_validation :geocode if :needs_geocode?
  attr_reader :response


  def get_zillow_chart
    response = HTTParty.get('https://www.zillow.com/webservice/GetChart.htm?zws-id=' + ENV['ZILLOW_ZWS_ID'] + '&zpid=' + self.zpid + '&unit-type=dollar&height=300&width=500').parsed_response
    response["chart"]["response"]["url"]
  end

  def needs_geocode?
    self.latitude.nil? || self.longitude.nil?
  end

  def needs_address?
    self.zpid.nil?
  end

  def fill_in_address
    if needs_address?
      @response = HTTParty.get('https://www.zillow.com/webservice/GetDeepSearchResults.htm?' + URI.encode(zillow_query)).parsed_response["searchresults"]["response"]["results"]["result"]
      self.zpid ||= @response["zpid"]
      self.city ||= @response["address"]["city"]
      self.state ||= @response["address"]["state"]
      self.zip ||= @response["address"]["zipcode"]
      self.zestimate ||= @response["zestimate"]["amount"]["__content__"]
      self.zindexvalue ||= @response["localRealEstate"]["region"]["zindexValue"]
      self.area ||= @response["localRealEstate"]["region"]["name"]
      self.areatype ||= @response["localRealEstate"]["region"]["type"]
      self.property_type ||= @response["useCode"]
      save
    end
    @response
  end

  def full_street_address
    self.street_number + ' ' + self.street + ', ' + self.city + ', ' + self.state
  end

  def zillow_query
    'zws-id=' + ENV['ZILLOW_ZWS_ID'] + '&address=' + self.street_number + ' ' + self.street + '&citystatezip=' + self.city + ', ' + self.state
  end


end
