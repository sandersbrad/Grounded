# == Schema Information
#
# Table name: investments
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  property_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  pending     :boolean          default(TRUE)
#

require 'test_helper'

class InvestmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
