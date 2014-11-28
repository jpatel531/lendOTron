class Purchase < ActiveRecord::Base
  belongs_to :user
  has_one :debt
  has_many :items

  def total
  	items.map(&:cost).inject(&:+)
  end
end