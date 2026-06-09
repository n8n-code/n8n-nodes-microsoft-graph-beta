import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementIntuneBrandingProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Intune Branding Profiles",
					"value": "Device Management List Intune Branding Profiles",
					"action": "Get intuneBrandingProfiles from deviceManagement",
					"description": "Intune branding profiles targeted to AAD groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intuneBrandingProfiles"
						}
					}
				},
				{
					"name": "Device Management Create Intune Branding Profiles",
					"value": "Device Management Create Intune Branding Profiles",
					"action": "Create new navigation property to intuneBrandingProfiles for deviceManagement",
					"description": "Create new navigation property to intuneBrandingProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intuneBrandingProfiles"
						}
					}
				},
				{
					"name": "Device Management Delete Intune Branding Profiles",
					"value": "Device Management Delete Intune Branding Profiles",
					"action": "Delete navigation property intuneBrandingProfiles for deviceManagement",
					"description": "Delete navigation property intuneBrandingProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Intune Branding Profiles",
					"value": "Device Management Get Intune Branding Profiles",
					"action": "Get intuneBrandingProfiles from deviceManagement",
					"description": "Intune branding profiles targeted to AAD groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Intune Branding Profiles",
					"value": "Device Management Update Intune Branding Profiles",
					"action": "Update the navigation property intuneBrandingProfiles in deviceManagement",
					"description": "Update the navigation property intuneBrandingProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intune Branding Profiles List Assignments",
					"value": "Device Management Intune Branding Profiles List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the branding profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Intune Branding Profiles Create Assignments",
					"value": "Device Management Intune Branding Profiles Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Intune Branding Profiles Delete Assignments",
					"value": "Device Management Intune Branding Profiles Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}/assignments/{{$parameter[\"intuneBrandingProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intune Branding Profiles Get Assignments",
					"value": "Device Management Intune Branding Profiles Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the branding profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}/assignments/{{$parameter[\"intuneBrandingProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Intune Branding Profiles Update Assignments",
					"value": "Device Management Intune Branding Profiles Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}/assignments/{{$parameter[\"intuneBrandingProfileAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/intuneBrandingProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management List Intune Branding Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intuneBrandingProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Create Intune Branding Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intuneBrandingProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Create Intune Branding Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Delete Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Delete Intune Branding Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Get Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Get Intune Branding Profiles"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Get Intune Branding Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Update Intune Branding Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Update Intune Branding Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Delete Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Get Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Get Assignments"
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
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Intune Branding Profile"
					],
					"operation": [
						"Device Management Intune Branding Profiles Update Assignments"
					]
				}
			}
		},
];
