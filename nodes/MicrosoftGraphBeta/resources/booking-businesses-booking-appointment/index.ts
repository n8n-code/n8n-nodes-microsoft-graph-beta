import type { INodeProperties } from 'n8n-workflow';

export const bookingBusinessesBookingAppointmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					]
				}
			},
			"options": [
				{
					"name": "Booking Businesses List Appointments",
					"value": "Booking Businesses List Appointments",
					"action": "List appointments",
					"description": "Get a list of bookingAppointment objects for the specified bookingBusiness.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/appointments"
						}
					}
				},
				{
					"name": "Booking Businesses Create Appointments",
					"value": "Booking Businesses Create Appointments",
					"action": "Create bookingAppointment",
					"description": "Create a new bookingAppointment for the specified bookingBusiness.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/appointments"
						}
					}
				},
				{
					"name": "Booking Businesses Delete Appointments",
					"value": "Booking Businesses Delete Appointments",
					"action": "Delete navigation property appointments for bookingBusinesses",
					"description": "Delete navigation property appointments for bookingBusinesses",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/appointments/{{$parameter[\"bookingAppointment-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Get Appointments",
					"value": "Booking Businesses Get Appointments",
					"action": "Get appointments from bookingBusinesses",
					"description": "All the appointments of this business. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/appointments/{{$parameter[\"bookingAppointment-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Update Appointments",
					"value": "Booking Businesses Update Appointments",
					"action": "Update the navigation property appointments in bookingBusinesses",
					"description": "Update the navigation property appointments in bookingBusinesses",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/appointments/{{$parameter[\"bookingAppointment-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses List Calendar View",
					"value": "Booking Businesses List Calendar View",
					"action": "Get calendarView from bookingBusinesses",
					"description": "The set of appointments of this business in a specified date range. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/calendarView"
						}
					}
				},
				{
					"name": "Booking Businesses Create Calendar View",
					"value": "Booking Businesses Create Calendar View",
					"action": "Create new navigation property to calendarView for bookingBusinesses",
					"description": "Create new navigation property to calendarView for bookingBusinesses",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/calendarView"
						}
					}
				},
				{
					"name": "Booking Businesses Delete Calendar View",
					"value": "Booking Businesses Delete Calendar View",
					"action": "Delete navigation property calendarView for bookingBusinesses",
					"description": "Delete navigation property calendarView for bookingBusinesses",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/calendarView/{{$parameter[\"bookingAppointment-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Get Calendar View",
					"value": "Booking Businesses Get Calendar View",
					"action": "Get calendarView from bookingBusinesses",
					"description": "The set of appointments of this business in a specified date range. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/calendarView/{{$parameter[\"bookingAppointment-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Update Calendar View",
					"value": "Booking Businesses Update Calendar View",
					"action": "Update the navigation property calendarView in bookingBusinesses",
					"description": "Update the navigation property calendarView in bookingBusinesses",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/calendarView/{{$parameter[\"bookingAppointment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/appointments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Appointments"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/appointments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Create Appointments"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/appointments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Create Appointments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Delete Appointments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Delete Appointments"
					]
				}
			}
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Get Appointments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Get Appointments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Get Appointments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Update Appointments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Update Appointments"
					]
				}
			}
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/calendarView",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"required": true,
			"description": "The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"required": true,
			"description": "The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/calendarView",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Create Calendar View"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/calendarView<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Create Calendar View"
					]
				}
			}
		},
		{
			"displayName": "DELETE /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Delete Calendar View"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Delete Calendar View"
					]
				}
			}
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"required": true,
			"description": "The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"required": true,
			"description": "The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Update Calendar View"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Appointment"
					],
					"operation": [
						"Booking Businesses Update Calendar View"
					]
				}
			}
		},
];
