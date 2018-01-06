class CreateDishes < ActiveRecord::Migration[5.1]
  def change
    create_table :dishes do |t|
      t.string :name
      t.float :price
      t.string :type

      t.timestamps
    end
  end
end
