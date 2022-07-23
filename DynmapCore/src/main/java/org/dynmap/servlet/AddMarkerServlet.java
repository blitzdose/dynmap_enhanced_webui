package org.dynmap.servlet;

import org.dynmap.DynmapCore;
import org.dynmap.markers.Marker;
import org.dynmap.markers.MarkerAPI;
import org.dynmap.markers.MarkerIcon;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;


public class AddMarkerServlet extends HttpServlet {

    MarkerAPI markerAPI;

    public AddMarkerServlet(DynmapCore dynmapCore) {
        markerAPI = dynmapCore.getMarkerAPI();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doGet(req, resp);
        try {
            String type = req.getParameter("type");
            String world = req.getParameter("world");
            String x = req.getParameter("x");
            String z = req.getParameter("z");
            String name = req.getParameter("name");
            String icon = req.getParameter("icon");

            if (markerAPI.getMarkerSet("web") == null) {
                markerAPI.createMarkerSet("web", "Web Markers", null, false);
            }

            if (type.equals("add")) {
                MarkerIcon markerIcon = markerAPI.getMarkerIcon(icon.replace(".png", ""));

                Marker marker = markerAPI.getMarkerSet("web").createMarker(String.valueOf(System.currentTimeMillis()), name, false,
                        world, Double.parseDouble(x), 64.0, Double.parseDouble(z), markerIcon, true);
            } else if (type.equals("remove")){
                markerAPI.getMarkerSet("web").getMarkers();
                for (Marker marker : markerAPI.getMarkerSet("web").getMarkers()) {
                    if (marker.getX() == Double.parseDouble(x) && marker.getZ() == Double.parseDouble(z) && Objects.equals(marker.getLabel(), name)) {
                        marker.deleteMarker();
                        break;
                    }
                }
            }


            resp.setContentLength("success".getBytes().length);
            resp.getOutputStream().write("success".getBytes());
            resp.getOutputStream().flush();
        } catch (Exception e) {
            e.printStackTrace();
            resp.sendError(500);
        }
    }
}
