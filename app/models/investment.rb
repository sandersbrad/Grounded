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
#  percentage  :integer          not null
#  initial     :boolean          default(FALSE)
#

class Investment < ActiveRecord::Base

  validates :user_id, :property_id, presence: true
  validates_uniqueness_of :user_id, scope: :property_id

  validate :not_over_invested?

  belongs_to :user
  belongs_to :property

  private

  def not_over_invested?
    (self.percentage + Investment.where(property_id: self.property_id).sum(:percentage)) <= 100
  end

end
