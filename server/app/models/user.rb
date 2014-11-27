class User < ActiveRecord::Base

	has_many :purchases
	has_many :debts, through: :purchases

end
