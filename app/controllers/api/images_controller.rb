class Api::ImagesController < ApplicationController

  def create
    @image = Image.new(image_params)

    if @image.save
      render json: @image
    else
      render json: @image.errors.full_messages, status: 422
    end

  end

  def destroy
    @image = Image.find(params[:id])

    @image.destroy
    render json: @image
  end

  private

  def image_params
    params.require(:image).permit(:image_url, :thumb_url, :property_id)
  end

end
