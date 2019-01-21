class ApplicationController < ActionController::API

    private

  def current_account
    @account ||= begin
      token = request.headers["Authorization"].to_s.split(" ").last
      payload, header = *JSONWebToken.verify(token)

      Account.from_auth_hash(payload)
    end
  rescue JWT::VerificationError, JWT::DecodeError
    nil
  end

end
