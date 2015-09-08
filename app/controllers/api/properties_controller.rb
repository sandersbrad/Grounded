class Api::PropertiesController < ApplicationController

  def index
    @properties = Property.includes(:investments).all.order(id: :desc)
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

    if current_user
      @property.user_id = current_user.id
    end

    if @property.save
      render json: @property
    else
      render json: @property.errors.full_messages, status: 422
    end
  end

  def update
    @property = Property.find(params[:id])

    if @property.update_attributes(prop_params)
      render json:  @property
    else
      render json: @peroperty.errors.full_messages, status: 422
    end
  end

  private

  def prop_params
    params.require(:property).permit(:street_number, :street, :city, :state, :zip, :unit, :initial, :description)
  end
end
