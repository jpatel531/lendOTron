class CreateDebts < ActiveRecord::Migration
  def change
    create_table :debts do |t|
      t.belongs_to :purchase, index: true
      t.float :amount
      t.timestamps
    end
  end
end
