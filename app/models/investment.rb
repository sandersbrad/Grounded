class Investment < ActiveRecord::Base

  validates :user_id, :property_id, uniqueness: true
  validates_uniqueness_of :user_id, scope: :property_id

  belongs_to :user
  belongs_to :property

end
