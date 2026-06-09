import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementPolicySetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Policy Sets",
					"value": "Device App Management List Policy Sets",
					"action": "Get policySets from deviceAppManagement",
					"description": "The PolicySet of Policies and Applications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/policySets"
						}
					}
				},
				{
					"name": "Device App Management Create Policy Sets",
					"value": "Device App Management Create Policy Sets",
					"action": "Create new navigation property to policySets for deviceAppManagement",
					"description": "Create new navigation property to policySets for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/policySets"
						}
					}
				},
				{
					"name": "Device App Management Delete Policy Sets",
					"value": "Device App Management Delete Policy Sets",
					"action": "Delete navigation property policySets for deviceAppManagement",
					"description": "Delete navigation property policySets for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Policy Sets",
					"value": "Device App Management Get Policy Sets",
					"action": "Get policySets from deviceAppManagement",
					"description": "The PolicySet of Policies and Applications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Policy Sets",
					"value": "Device App Management Update Policy Sets",
					"action": "Update the navigation property policySets in deviceAppManagement",
					"description": "Update the navigation property policySets in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets List Assignments",
					"value": "Device App Management Policy Sets List Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "Assignments of the PolicySet.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Create Assignments",
					"value": "Device App Management Policy Sets Create Assignments",
					"action": "Create new navigation property to assignments for deviceAppManagement",
					"description": "Create new navigation property to assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Delete Assignments",
					"value": "Device App Management Policy Sets Delete Assignments",
					"action": "Delete navigation property assignments for deviceAppManagement",
					"description": "Delete navigation property assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/assignments/{{$parameter[\"policySetAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Get Assignments",
					"value": "Device App Management Policy Sets Get Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "Assignments of the PolicySet.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/assignments/{{$parameter[\"policySetAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Update Assignments",
					"value": "Device App Management Policy Sets Update Assignments",
					"action": "Update the navigation property assignments in deviceAppManagement",
					"description": "Update the navigation property assignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/assignments/{{$parameter[\"policySetAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets List Items",
					"value": "Device App Management Policy Sets List Items",
					"action": "Get items from deviceAppManagement",
					"description": "Items of the PolicySet with maximum count 100.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/items"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Create Items",
					"value": "Device App Management Policy Sets Create Items",
					"action": "Create new navigation property to items for deviceAppManagement",
					"description": "Create new navigation property to items for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/items"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Delete Items",
					"value": "Device App Management Policy Sets Delete Items",
					"action": "Delete navigation property items for deviceAppManagement",
					"description": "Delete navigation property items for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/items/{{$parameter[\"policySetItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Get Items",
					"value": "Device App Management Policy Sets Get Items",
					"action": "Get items from deviceAppManagement",
					"description": "Items of the PolicySet with maximum count 100.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/items/{{$parameter[\"policySetItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Update Items",
					"value": "Device App Management Policy Sets Update Items",
					"action": "Update the navigation property items in deviceAppManagement",
					"description": "Update the navigation property items in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/items/{{$parameter[\"policySetItem-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/policySets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management List Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/policySets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Create Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/policySets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Create Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/policySets/{policySet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Delete Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Delete Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/policySets/{policySet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Get Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Get Policy Sets"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Get Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/policySets/{policySet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Update Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/policySets/{policySet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Update Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/policySets/{policySet-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/policySets/{policySet-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/policySets/{policySet-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Delete Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Get Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Get Assignments"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/policySets/{policySet-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets List Items"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/policySets/{policySet-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Create Items"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/policySets/{policySet-id}/items<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Create Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Delete Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Delete Items"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Get Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Get Items"
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
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Get Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Update Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Policy Set"
					],
					"operation": [
						"Device App Management Policy Sets Update Items"
					]
				}
			}
		},
];
