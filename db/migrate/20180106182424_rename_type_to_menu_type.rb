class RenameTypeToMenuType < ActiveRecord::Migration[5.1]
  def change
    rename_column :dishes, :type, :menu_type
  end
end
