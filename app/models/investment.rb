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

class Investment < ActiveRecord::Base

  validates :user_id, :property_id, presence: true
  validates_uniqueness_of :user_id, scope: :property_id

  belongs_to :user
  belongs_to :property

end
