class ChangeNullColumnslPropertyColumns < ActiveRecord::Migration
  def change
    change_column :properties, :num_beds, :integer, null: true
    change_column :properties, :num_baths, :integer, null: true
    change_column :properties, :property_type, :string, null: true
    change_column :properties, :price, :integer, null: true
  end
end
