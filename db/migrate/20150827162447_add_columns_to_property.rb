class AddColumnsToProperty < ActiveRecord::Migration
  def change
    add_column :properties, :zestimate, :string
    add_column :properties, :zindexvalue, :string
    add_column :properties, :area, :string
    add_column :properties, :areatype, :string 
  end
end
