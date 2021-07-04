import java.io.IOException;
import java.net.Socket;
import java.sql.Connection;

public class TCPServer {
    private static ServerSocket listenSocket;

    public static <listenSocket> void main(String[] args) {
        try{
            int serverPort = 7896;
            listenSocket = new ServerSocket(serverPort);
            while(true){
                Socket clientSocket = listenSocket.accept();
                Connection c = new Connection(clientSocket);
            }
        }catch(IOException e){
            System.out.println("Listen:" + e.getMessage());
        }
    }
}
