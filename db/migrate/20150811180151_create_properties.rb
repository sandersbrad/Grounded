class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :street_number, null: false
      t.string :unit
      t.string :street, null: false, index: true
      t.string :city, null: false, index: true
      t.string :state, null: false, index: true
      t.string :zip, null: false, index: true
      t.text :description
      t.integer :num_beds, null: false, index: true
      t.integer :num_baths, null: false, index: true
      t.integer :price, null: false, index: true
      t.string :property_type, null: false, index: true

      t.timestamps null: false
    end
  end
end
