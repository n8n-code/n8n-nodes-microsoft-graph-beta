import type { INodeProperties } from 'n8n-workflow';

export const usersDeviceEnrollmentConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Users List Device Enrollment Configurations",
					"value": "Users List Device Enrollment Configurations",
					"action": "Get deviceEnrollmentConfigurations from users",
					"description": "Get enrollment configurations targeted to the user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations"
						}
					}
				},
				{
					"name": "Users Create Device Enrollment Configurations",
					"value": "Users Create Device Enrollment Configurations",
					"action": "Create new navigation property to deviceEnrollmentConfigurations for users",
					"description": "Create new navigation property to deviceEnrollmentConfigurations for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations"
						}
					}
				},
				{
					"name": "Users Delete Device Enrollment Configurations",
					"value": "Users Delete Device Enrollment Configurations",
					"action": "Delete navigation property deviceEnrollmentConfigurations for users",
					"description": "Delete navigation property deviceEnrollmentConfigurations for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Device Enrollment Configurations",
					"value": "Users Get Device Enrollment Configurations",
					"action": "Get deviceEnrollmentConfigurations from users",
					"description": "Get enrollment configurations targeted to the user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Device Enrollment Configurations",
					"value": "Users Update Device Enrollment Configurations",
					"action": "Update the navigation property deviceEnrollmentConfigurations in users",
					"description": "Update the navigation property deviceEnrollmentConfigurations in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Users Device Enrollment Configurations List Assignments",
					"value": "Users Device Enrollment Configurations List Assignments",
					"action": "Get assignments from users",
					"description": "The list of group assignments for the device configuration profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Users Device Enrollment Configurations Create Assignments",
					"value": "Users Device Enrollment Configurations Create Assignments",
					"action": "Create new navigation property to assignments for users",
					"description": "Create new navigation property to assignments for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Users Device Enrollment Configurations Delete Assignments",
					"value": "Users Device Enrollment Configurations Delete Assignments",
					"action": "Delete navigation property assignments for users",
					"description": "Delete navigation property assignments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments/{{$parameter[\"enrollmentConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Device Enrollment Configurations Get Assignments",
					"value": "Users Device Enrollment Configurations Get Assignments",
					"action": "Get assignments from users",
					"description": "The list of group assignments for the device configuration profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments/{{$parameter[\"enrollmentConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Device Enrollment Configurations Update Assignments",
					"value": "Users Device Enrollment Configurations Update Assignments",
					"action": "Update the navigation property assignments in users",
					"description": "Update the navigation property assignments in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments/{{$parameter[\"enrollmentConfigurationAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/deviceEnrollmentConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/deviceEnrollmentConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Create Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/deviceEnrollmentConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Create Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Delete Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Delete Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Get Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Get Device Enrollment Configurations"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Get Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Update Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Update Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Delete Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Get Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Get Assignments"
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
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Device Enrollment Configuration"
					],
					"operation": [
						"Users Device Enrollment Configurations Update Assignments"
					]
				}
			}
		},
];
