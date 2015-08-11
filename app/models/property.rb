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
#

class Property < ActiveRecord::Base

  PROPERY_TYPES = [
    "House",
    "Apartment"
  ]

  validates: :street_number, :street, :city, :state, :zip, presence: true
  validates: :num_beds, :num_baths, :price, presence: true
  validates_uniqueness_of: :street_number, scope: [:unit, :street, :city, :state]
  validates_inclusion_of: :property_type, in: PROPERY_TYPES, message: "Invalid property type"

  
end
