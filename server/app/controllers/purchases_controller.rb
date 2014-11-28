class PurchasesController < ApplicationController

	def create
		purchase = Purchase.create!(title: params[:title], description: params[:description])	
		params[:items].each { |item| purchase.items.create! name: item[:name], cost: item[:cost] }
	end

end