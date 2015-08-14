class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :property_id, null: false
      t.string :image_url, null: false
      t.string :thumb_url, null: false

      t.timestamps null: false
    end
  end
end
