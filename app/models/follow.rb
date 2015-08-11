class Follow < ActiveRecord::Base

  validates_uniqueness_of :user_id, scope: :property_id

end
