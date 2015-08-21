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
#  num_beds      :integer          not null
#  num_baths     :integer          not null
#  price         :integer          not null
#  property_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  latitude      :float
#  longitude     :float
#  zpid          :string
#

class Property < ActiveRecord::Base
  require 'uri'

  PROPERY_TYPES = [
    "House",
    "Apartment"
  ]

  validates :street_number, :street, :city, :state, :zip, presence: true
  validates :num_beds, :num_baths, :price, presence: true
  validates_uniqueness_of :street_number, scope: [:unit, :street, :city, :state]
  validates_inclusion_of :property_type, in: PROPERY_TYPES, message: "Invalid property type"

  has_many :follows
  has_many :investments
  has_many :images

  has_many :followers, through: :follows, source: :user
  has_many :investors, through: :investments, source: :user

  geocoded_by :full_street_address
  after_initialize :get_zpid
  after_validation :geocode


  def get_zillow_chart
    response = HTTParty.get('https://www.zillow.com/webservice/GetChart.htm?zws-id=' + ENV['ZILLOW_ZWS_ID'] + '&zpid=' + self.zpid + '&unit-type=dollar&height=300&width=500')
    response["chart"]["response"]["url"]
  end

  private

  def get_zpid
    response = HTTParty.get('https://www.zillow.com/webservice/GetDeepSearchResults.htm?' + URI.encode(zillow_query)).parsed_response
    debugger
    self.zpid = response["searchresults"]["response"]["results"]["result"]["zpid"]
    save
  end

  def full_street_address
    self.street_number + ' ' + self.street + ', ' + self.city + ', ' + self.state
  end

  def zillow_query
    'zws-id=' + ENV['ZILLOW_ZWS_ID'] + '&address=' + self.street_number + ' ' + self.street + '&citystatezip=' + self.city + ', ' + self.state
  end


end
