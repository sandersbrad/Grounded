class AddPercentageToInvestments < ActiveRecord::Migration
  def change
    add_column :investments, :percentage, :integer, null: false
  end
end
