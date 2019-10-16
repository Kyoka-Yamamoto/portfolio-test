class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.date :order_date
      t.date :delivery_date
      t.integer :cost
      t.string :status

      t.timestamps
    end
  end
end
