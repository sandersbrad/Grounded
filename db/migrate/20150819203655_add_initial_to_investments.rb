class AddInitialToInvestments < ActiveRecord::Migration
  def change
    add_column :investments, :initial, :boolean, default: false
  end
end
