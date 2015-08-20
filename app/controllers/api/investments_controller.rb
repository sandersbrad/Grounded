class Api::InvestmentsController < ApplicationController


  def create
    @investment = Investment.new(investment_params)

    if @investment.save
      render json: @investment
    else
      render json: @investment.errors.full_messages, status: 422
    end
  end

  def destroy
    @investment = Investment.find(params[:id])
    @investment.destroy
    render json: @investment
  end

  private

  def investment_params
    params.require(:investment).permit(:user_id, :property_id, :percentage)
  end

end
