class AddPendingtoInvestments < ActiveRecord::Migration
  def change
    add_column :investments, :pending, :boolean, default: :true
  end
end
