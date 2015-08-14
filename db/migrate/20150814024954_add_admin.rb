class AddAdmin < ActiveRecord::Migration
  def change
    add_column :users, :admin, :integer, index: true
  end
end
