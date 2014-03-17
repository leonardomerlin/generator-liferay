
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui"%>
<%@ taglib uri="http://alloy.liferay.com/tld/aui" prefix="aui"%>

<%@ page import="java.text.DateFormat" %>
<%@ page import="java.util.Date"%>
<%@ page import="java.text.Format" %>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Locale"%>
<%@ page import="java.util.TimeZone"%>

<%@ page import="javax.portlet.PortletURL"%>

<%@ page import="com.liferay.portal.util.PortalUtil"%>
<%@ page import="com.liferay.portal.kernel.util.Validator"%>
<%@ page import="com.liferay.portal.kernel.util.DateUtil" %>
<%@ page import="com.liferay.portal.kernel.util.FastDateFormatFactoryUtil" %>
<%@ page import="com.liferay.portal.kernel.dao.orm.QueryUtil"%>

<portlet:defineObjects />

<%-- 
The define objects tag (portlet:defineObjects/>) has been enhanced.
	Following variables are available in the JSP page when included from within a Portlet.
		RenderRequest renderRequest and RenderResponse renderResponse (if the JSP is included from render method)
		ResourceRequest resourceRequest and ResourceResponse resourceResponse (if the JSP is included from serveResource method)
		ActionRequest actionRequest and ActionResponse actionResponse (if the JSP is included from processAction method)
		EventRequest eventRequest and EventResponse eventResponse (if the JSP is included from processEvent method)
		PortletConfig portletConfig
		PortletSession portletSession (returns an existing session or null if no session exists)
		Map<String, Object> portletSessionScope (provides access to the portletSession attributes)
		PortletPreferences portletPreferences (provides access to the portlet preferences)
		Map<String, String[]> portletPreferencesValues (provides access to the portlet preferences as a Map)
	Other additions made in the Portlet 2.0 specification includes
		Adding a new resourceURL (<portlet:resourceURL>) tag for generating resource URLs
		Adding the new propertyTag (<portlet:property>)  that can be used inside portlet URL tags for adding properties to URL
--%>