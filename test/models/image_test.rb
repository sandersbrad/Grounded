# == Schema Information
#
# Table name: images
#
#  id          :integer          not null, primary key
#  property_id :integer          not null
#  image_url   :string           not null
#  thumb_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
