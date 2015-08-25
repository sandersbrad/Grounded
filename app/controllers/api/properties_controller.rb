class Api::PropertiesController < ApplicationController

  def index
    @properties = Property.includes(:investments).all
  end

  def followed
    @properties = current_user.followed_properties
  end

  def invested
    @properties = current_user.invested_properties
  end

  def show
    @property = Property.includes(:investments).find(params[:id])
  end

  def create
    @property = Property.new(prop_params)

    if @property.save
      render json: @property
    else
      render json: @property.errors.full_messages, status: 422
    end
  end

  private

  def prop_params
    params.require(:property).permit(:street_number, :street, :city, :state, :zip, :unit)
  end
end
