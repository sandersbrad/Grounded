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

class Follow < ActiveRecord::Base

  validates_uniqueness_of :user_id, scope: :property_id

end
