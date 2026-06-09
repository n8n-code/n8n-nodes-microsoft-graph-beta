import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAppleUserInitiatedEnrollmentProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Apple User Initiated Enrollment Profiles",
					"value": "Device Management List Apple User Initiated Enrollment Profiles",
					"action": "Get appleUserInitiatedEnrollmentProfiles from deviceManagement",
					"description": "Apple user initiated enrollment profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles"
						}
					}
				},
				{
					"name": "Device Management Create Apple User Initiated Enrollment Profiles",
					"value": "Device Management Create Apple User Initiated Enrollment Profiles",
					"action": "Create new navigation property to appleUserInitiatedEnrollmentProfiles for deviceManagement",
					"description": "Create new navigation property to appleUserInitiatedEnrollmentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles"
						}
					}
				},
				{
					"name": "Device Management Delete Apple User Initiated Enrollment Profiles",
					"value": "Device Management Delete Apple User Initiated Enrollment Profiles",
					"action": "Delete navigation property appleUserInitiatedEnrollmentProfiles for deviceManagement",
					"description": "Delete navigation property appleUserInitiatedEnrollmentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Apple User Initiated Enrollment Profiles",
					"value": "Device Management Get Apple User Initiated Enrollment Profiles",
					"action": "Get appleUserInitiatedEnrollmentProfiles from deviceManagement",
					"description": "Apple user initiated enrollment profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Apple User Initiated Enrollment Profiles",
					"value": "Device Management Update Apple User Initiated Enrollment Profiles",
					"action": "Update the navigation property appleUserInitiatedEnrollmentProfiles in deviceManagement",
					"description": "Update the navigation property appleUserInitiatedEnrollmentProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Apple User Initiated Enrollment Profiles List Assignments",
					"value": "Device Management Apple User Initiated Enrollment Profiles List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for this profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Apple User Initiated Enrollment Profiles Create Assignments",
					"value": "Device Management Apple User Initiated Enrollment Profiles Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Apple User Initiated Enrollment Profiles Delete Assignments",
					"value": "Device Management Apple User Initiated Enrollment Profiles Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}/assignments/{{$parameter[\"appleEnrollmentProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Apple User Initiated Enrollment Profiles Get Assignments",
					"value": "Device Management Apple User Initiated Enrollment Profiles Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for this profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}/assignments/{{$parameter[\"appleEnrollmentProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Apple User Initiated Enrollment Profiles Update Assignments",
					"value": "Device Management Apple User Initiated Enrollment Profiles Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}/assignments/{{$parameter[\"appleEnrollmentProfileAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/appleUserInitiatedEnrollmentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management List Apple User Initiated Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/appleUserInitiatedEnrollmentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Create Apple User Initiated Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/appleUserInitiatedEnrollmentProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Create Apple User Initiated Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Delete Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Delete Apple User Initiated Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Get Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Get Apple User Initiated Enrollment Profiles"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Get Apple User Initiated Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Update Apple User Initiated Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Update Apple User Initiated Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Delete Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Get Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Get Assignments"
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
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple User Initiated Enrollment Profile"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Update Assignments"
					]
				}
			}
		},
];
