class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.belongs_to :purchase, index: true
      t.string :name
      t.float :cost

      t.timestamps
    end
  end
end
