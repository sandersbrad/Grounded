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

class Image < ActiveRecord::Base
  validates :property_id, :image_url, presence: true
  validates_uniqueness_of :image_url, scope: :property_id

  belongs_to :property
end
