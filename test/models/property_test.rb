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
#

require 'test_helper'

class PropertyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
