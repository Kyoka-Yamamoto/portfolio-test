class CreateSubscriptions < ActiveRecord::Migration[6.0]
  def change
    create_table :subscriptions do |t|
      t.string :title
      t.text :content
      t.string :image
      t.integer :price

      t.timestamps
    end
  end
end
