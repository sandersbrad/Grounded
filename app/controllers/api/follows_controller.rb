class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render json: @follow
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :property_id)
  end

end
