import type { INodeProperties } from 'n8n-workflow';

export const bookingBusinessesBookingStaffMemberDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Staff Member"
					]
				}
			},
			"options": [
				{
					"name": "Booking Businesses List Staff Members",
					"value": "Booking Businesses List Staff Members",
					"action": "List staffMembers",
					"description": "Get a list of bookingStaffMember objects in the specified bookingBusiness.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/staffMembers"
						}
					}
				},
				{
					"name": "Booking Businesses Create Staff Members",
					"value": "Booking Businesses Create Staff Members",
					"action": "Create bookingStaffMember",
					"description": "Create a new staff member in the specified bookingBusiness.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/staffMembers"
						}
					}
				},
				{
					"name": "Booking Businesses Delete Staff Members",
					"value": "Booking Businesses Delete Staff Members",
					"action": "Delete navigation property staffMembers for bookingBusinesses",
					"description": "Delete navigation property staffMembers for bookingBusinesses",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/staffMembers/{{$parameter[\"bookingStaffMember-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Get Staff Members",
					"value": "Booking Businesses Get Staff Members",
					"action": "Get staffMembers from bookingBusinesses",
					"description": "All the staff members that provide services in this business. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/staffMembers/{{$parameter[\"bookingStaffMember-id\"]}}"
						}
					}
				},
				{
					"name": "Booking Businesses Update Staff Members",
					"value": "Booking Businesses Update Staff Members",
					"action": "Update the navigation property staffMembers in bookingBusinesses",
					"description": "Update the navigation property staffMembers in bookingBusinesses",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/bookingBusinesses/{{$parameter[\"bookingBusiness-id\"]}}/staffMembers/{{$parameter[\"bookingStaffMember-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/staffMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses List Staff Members"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/staffMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Create Staff Members"
					]
				}
			}
		},
		{
			"displayName": "POST /bookingBusinesses/{bookingBusiness-id}/staffMembers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Create Staff Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Delete Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Delete Staff Members"
					]
				}
			}
		},
		{
			"displayName": "GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Get Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Get Staff Members"
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
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Get Staff Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Update Staff Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Booking Businesses Booking Staff Member"
					],
					"operation": [
						"Booking Businesses Update Staff Members"
					]
				}
			}
		},
];
