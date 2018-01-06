class Api::DishesController < ApplicationController
  before_action :set_dish, only: [:show, :update, :destroy]

  def index
    render json: Dish.all
  end

  def show
    render json: @dish
  end

  def create
    dish = Dish.new(dish_params)
    if dish.save
      render json: dish
    else
      render json: dish.errors, status: 422
    end
  end

  def update
    if @dish.update(dish_params)
      render json: @dish
    else
      render json: @dish.errors, status: 422
    end
  end

  def destroy
    @dish.destroy
  end

  private
    def set_dish
      @dish = Dish.find(params[:id])
    end

    def dish_params
      params.require(:dish).permit(:name, :ingredients, :price, :menu_type)
    end

end
