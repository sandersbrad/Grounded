# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  property_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
