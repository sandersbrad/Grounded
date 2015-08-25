class AddInitialColumntoProperties < ActiveRecord::Migration
  def change
    add_column :properties, :initial, :boolean
  end
end
