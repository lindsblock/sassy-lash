class Api::TestimonialsController < ApplicationController
  def index
    render json: Testimonial.all.order(created_at: :desc)
  end

  def create
    testimonial = Testimonial.create(testimonial_params)
    if testimonial.save
      render json: testimonial
    else
      render json: { erors: testimonial.errors.full_messages.join(','), status: 422 }
    end
  end

  private

  def testimonial_params
    params.require(:testimonial).permit(:name, :comment)
  end

end
