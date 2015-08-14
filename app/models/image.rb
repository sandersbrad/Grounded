class Image < ActiveRecord::Base
  validates :property_id, :image_url, presence: true
  validates_uniqueness_of :image_url, scope: :property_id
end
