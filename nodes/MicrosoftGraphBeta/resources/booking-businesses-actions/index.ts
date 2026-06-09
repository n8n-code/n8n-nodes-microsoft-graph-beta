import type { INodeProperties } from 'n8n-workflow';

export const bookingBusinessesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					]
				}
			},
			"options": [
				{
					"name": "Booking Businesses Booking Business Appointments Booking Appointment Cancel",
					"value": "Booking Businesses Booking Business Appointments Booking Appointment Cancel",
					"action": "Invoke action cancel",
					"description": "Cancel the specified bookingAppointment in the specified bookingBusiness, and send a message to the involved customer and staff members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/appointments/{{$parameter[\"bookingAppointment-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Booking Businesses Booking Business Calendar View Booking Appointment Cancel",
					"value": "Booking Businesses Booking Business Calendar View Booking Appointment Cancel",
					"action": "Invoke action cancel",
					"description": "Cancel the specified bookingAppointment in the specified bookingBusiness, and send a message to the involved customer and staff members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/calendarView/{{$parameter[\"bookingAppointment-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Booking Businesses Booking Business Get Staff Availability",
					"value": "Booking Businesses Booking Business Get Staff Availability",
					"action": "Invoke action getStaffAvailability",
					"description": "Get the availability information of staff members of a Microsoft Bookings calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/microsoft.graph.getStaffAvailability"
						}
					}
				},
				{
					"name": "Booking Businesses Booking Business Publish",
					"value": "Booking Businesses Booking Business Publish",
					"action": "Invoke action publish",
					"description": "Make the scheduling page of this business available to external customers. Set the **isPublished** property to true, and **publicUrl** property to the URL of the scheduling page.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Booking Businesses Booking Business Unpublish",
					"value": "Booking Businesses Booking Business Unpublish",
					"action": "Invoke action unpublish",
					"description": "Make the scheduling page of this business not available to external customers. Set the **isPublished** property to false, and **publicUrl** property to null.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/microsoft.graph.unpublish"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Appointments Booking Appointment Cancel"
					]
				}
			}
		},
		{
			"displayName": "Cancellation Message",
			"name": "cancellationMessage",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cancellationMessage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Appointments Booking Appointment Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Calendar View Booking Appointment Cancel"
					]
				}
			}
		},
		{
			"displayName": "Cancellation Message",
			"name": "cancellationMessage",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cancellationMessage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Calendar View Booking Appointment Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/microsoft.graph.getStaffAvailability",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Get Staff Availability"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Get Staff Availability"
					]
				}
			}
		},
		{
			"displayName": "Staff Ids",
			"name": "staffIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "staffIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Get Staff Availability"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Get Staff Availability"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/microsoft.graph.unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Actions"
					],
					"operation": [
						"Booking Businesses Booking Business Unpublish"
					]
				}
			}
		},
];
