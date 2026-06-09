import type { INodeProperties } from 'n8n-workflow';

export const officeConfigurationOfficeClientConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Office Configuration List Client Configurations",
					"value": "Office Configuration List Client Configurations",
					"action": "Get clientConfigurations from officeConfiguration",
					"description": "List of office Client configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/officeConfiguration/clientConfigurations"
						}
					}
				},
				{
					"name": "Office Configuration Create Client Configurations",
					"value": "Office Configuration Create Client Configurations",
					"action": "Create new navigation property to clientConfigurations for officeConfiguration",
					"description": "Create new navigation property to clientConfigurations for officeConfiguration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/officeConfiguration/clientConfigurations"
						}
					}
				},
				{
					"name": "Office Configuration Delete Client Configurations",
					"value": "Office Configuration Delete Client Configurations",
					"action": "Delete navigation property clientConfigurations for officeConfiguration",
					"description": "Delete navigation property clientConfigurations for officeConfiguration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Office Configuration Get Client Configurations",
					"value": "Office Configuration Get Client Configurations",
					"action": "Get clientConfigurations from officeConfiguration",
					"description": "List of office Client configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Office Configuration Update Client Configurations",
					"value": "Office Configuration Update Client Configurations",
					"action": "Update the navigation property clientConfigurations in officeConfiguration",
					"description": "Update the navigation property clientConfigurations in officeConfiguration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Office Configuration Client Configurations List Assignments",
					"value": "Office Configuration Client Configurations List Assignments",
					"action": "Get assignments from officeConfiguration",
					"description": "The list of group assignments for the policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Office Configuration Client Configurations Create Assignments",
					"value": "Office Configuration Client Configurations Create Assignments",
					"action": "Create new navigation property to assignments for officeConfiguration",
					"description": "Create new navigation property to assignments for officeConfiguration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Office Configuration Client Configurations Delete Assignments",
					"value": "Office Configuration Client Configurations Delete Assignments",
					"action": "Delete navigation property assignments for officeConfiguration",
					"description": "Delete navigation property assignments for officeConfiguration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/assignments/{{$parameter[\"officeClientConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Office Configuration Client Configurations Get Assignments",
					"value": "Office Configuration Client Configurations Get Assignments",
					"action": "Get assignments from officeConfiguration",
					"description": "The list of group assignments for the policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/assignments/{{$parameter[\"officeClientConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Office Configuration Client Configurations Update Assignments",
					"value": "Office Configuration Client Configurations Update Assignments",
					"action": "Update the navigation property assignments in officeConfiguration",
					"description": "Update the navigation property assignments in officeConfiguration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/assignments/{{$parameter[\"officeClientConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Office Configuration Get Client Configurations Policy Payload",
					"value": "Office Configuration Get Client Configurations Policy Payload",
					"action": "Get policyPayload for the navigation property clientConfigurations from officeConfiguration",
					"description": "Policy settings JSON string in binary format, these values cannot be changed by the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/policyPayload"
						}
					}
				},
				{
					"name": "Office Configuration Update Client Configurations Policy Payload",
					"value": "Office Configuration Update Client Configurations Policy Payload",
					"action": "Update policyPayload for the navigation property clientConfigurations in officeConfiguration",
					"description": "Policy settings JSON string in binary format, these values cannot be changed by the user.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/policyPayload"
						}
					}
				},
				{
					"name": "Office Configuration Get Client Configurations User Preference Payload",
					"value": "Office Configuration Get Client Configurations User Preference Payload",
					"action": "Get userPreferencePayload for the navigation property clientConfigurations from officeConfiguration",
					"description": "Preference settings JSON string in binary format, these values can be overridden by the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/userPreferencePayload"
						}
					}
				},
				{
					"name": "Office Configuration Update Client Configurations User Preference Payload",
					"value": "Office Configuration Update Client Configurations User Preference Payload",
					"action": "Update userPreferencePayload for the navigation property clientConfigurations in officeConfiguration",
					"description": "Preference settings JSON string in binary format, these values can be overridden by the user.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/userPreferencePayload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /officeConfiguration/clientConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration List Client Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /officeConfiguration/clientConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Create Client Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /officeConfiguration/clientConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Create Client Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Delete Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Delete Client Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Get Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Get Client Configurations"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Get Client Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Update Client Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Update Client Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/assignments/{officeClientConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Delete Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/assignments/{officeClientConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Get Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Get Assignments"
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
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/assignments/{officeClientConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/assignments/{officeClientConfigurationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Client Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/policyPayload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Get Client Configurations Policy Payload"
					]
				}
			}
		},
		{
			"displayName": "PUT /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/policyPayload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Update Client Configurations Policy Payload"
					]
				}
			}
		},
		{
			"displayName": "PUT /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/policyPayload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Update Client Configurations Policy Payload"
					]
				}
			}
		},
		{
			"displayName": "GET /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/userPreferencePayload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Get Client Configurations User Preference Payload"
					]
				}
			}
		},
		{
			"displayName": "PUT /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/userPreferencePayload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Update Client Configurations User Preference Payload"
					]
				}
			}
		},
		{
			"displayName": "PUT /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/userPreferencePayload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Client Configuration"
					],
					"operation": [
						"Office Configuration Update Client Configurations User Preference Payload"
					]
				}
			}
		},
];
