class AddIngredientsToDish < ActiveRecord::Migration[5.1]
  def change
    add_column :dishes, :ingredients, :string
  end
end
