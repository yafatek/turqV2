package io.turq.turq.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import io.turq.turq.service.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import com.auth0.jwt.exceptions.JWTDecodeException;

import java.util.Date;

import static io.turq.turq.contstants.SecurityConstants.TOKEN_PREFIX;
import static io.turq.turq.contstants.SecurityConstants.EXPIRATION_TIME;

@Component
public class JwtTokenUtil {


    @Value("${jwt.secret}")
    private String jwtSecret;

    @Autowired
    private IUserService userService;

    public String getSubject(String token) {
        String retClaim = null;
        token = token.replace(TOKEN_PREFIX, "");
        try {
            DecodedJWT jwt = JWT.decode(token);
            retClaim = jwt.getSubject();
        } catch (JWTDecodeException exception){
            System.out.println("Received Malformed JWT: " + token);
        }
        return retClaim;
    }

    public String verifyJwt(String token) {
          String user = null;
          try {
              user = JWT.require(Algorithm.HMAC512(jwtSecret.getBytes()))
                      .build()
                      .verify(token.replace(TOKEN_PREFIX, ""))
                      .getSubject();
          } catch (JWTDecodeException e) {
               System.out.println("Received Malformed JWT: " + token);
               return null;
          } catch (IllegalArgumentException e) {
              System.out.println("Received Malformed JWT: " + token);
              return null;
          }
        return user;
     }

    public String generateJwt(String email) {

        return JWT.create()
                .withSubject(email)
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(Algorithm.HMAC512( jwtSecret) );
    }
}
