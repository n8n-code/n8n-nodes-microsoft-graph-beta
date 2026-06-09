import type { INodeProperties } from 'n8n-workflow';

export const usersOnenoteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Onenote",
					"value": "Users Delete Onenote",
					"action": "Delete navigation property onenote for users",
					"description": "Delete navigation property onenote for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Users Get Onenote",
					"value": "Users Get Onenote",
					"action": "Get onenote from users",
					"description": "Get onenote from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Users Update Onenote",
					"value": "Users Update Onenote",
					"action": "Update the navigation property onenote in users",
					"description": "Update the navigation property onenote in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Users Onenote List Notebooks",
					"value": "Users Onenote List Notebooks",
					"action": "List notebooks",
					"description": "Retrieve a list of notebook objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks"
						}
					}
				},
				{
					"name": "Users Onenote Create Notebooks",
					"value": "Users Onenote Create Notebooks",
					"action": "Create notebook",
					"description": "Create a new OneNote notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks"
						}
					}
				},
				{
					"name": "Users Onenote Delete Notebooks",
					"value": "Users Onenote Delete Notebooks",
					"action": "Delete navigation property notebooks for users",
					"description": "Delete navigation property notebooks for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Get Notebooks",
					"value": "Users Onenote Get Notebooks",
					"action": "Get notebooks from users",
					"description": "The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Update Notebooks",
					"value": "Users Onenote Update Notebooks",
					"action": "Update the navigation property notebooks in users",
					"description": "Update the navigation property notebooks in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks List Section Groups",
					"value": "Users Onenote Notebooks List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified notebook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Create Section Groups",
					"value": "Users Onenote Notebooks Create Section Groups",
					"action": "Create sectionGroup",
					"description": "Create a new section group in the specified notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Delete Section Groups",
					"value": "Users Onenote Notebooks Delete Section Groups",
					"action": "Delete navigation property sectionGroups for users",
					"description": "Delete navigation property sectionGroups for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Get Section Groups",
					"value": "Users Onenote Notebooks Get Section Groups",
					"action": "Get sectionGroups from users",
					"description": "The section groups in the notebook. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Update Section Groups",
					"value": "Users Onenote Notebooks Update Section Groups",
					"action": "Update the navigation property sectionGroups in users",
					"description": "Update the navigation property sectionGroups in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Get Parent Notebook",
					"value": "Users Onenote Notebooks Section Groups Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Get Parent Section Group",
					"value": "Users Onenote Notebooks Section Groups Get Parent Section Group",
					"action": "Get parentSectionGroup from users",
					"description": "The section group that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups List Section Groups",
					"value": "Users Onenote Notebooks Section Groups List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Get Section Groups",
					"value": "Users Onenote Notebooks Section Groups Get Section Groups",
					"action": "Get sectionGroups from users",
					"description": "The section groups in the section. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups List Sections",
					"value": "Users Onenote Notebooks Section Groups List Sections",
					"action": "List sections",
					"description": "Retrieve a list of onenoteSection objects from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Create Sections",
					"value": "Users Onenote Notebooks Section Groups Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified section group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Delete Sections",
					"value": "Users Onenote Notebooks Section Groups Delete Sections",
					"action": "Delete navigation property sections for users",
					"description": "Delete navigation property sections for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Get Sections",
					"value": "Users Onenote Notebooks Section Groups Get Sections",
					"action": "Get sections from users",
					"description": "The sections in the section group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Update Sections",
					"value": "Users Onenote Notebooks Section Groups Update Sections",
					"action": "Update the navigation property sections in users",
					"description": "Update the navigation property sections in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections List Pages",
					"value": "Users Onenote Notebooks Section Groups Sections List Pages",
					"action": "Get pages from users",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Create Pages",
					"value": "Users Onenote Notebooks Section Groups Sections Create Pages",
					"action": "Create new navigation property to pages for users",
					"description": "Create new navigation property to pages for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Delete Pages",
					"value": "Users Onenote Notebooks Section Groups Sections Delete Pages",
					"action": "Delete navigation property pages for users",
					"description": "Delete navigation property pages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Get Pages",
					"value": "Users Onenote Notebooks Section Groups Sections Get Pages",
					"action": "Get pages from users",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Update Pages",
					"value": "Users Onenote Notebooks Section Groups Sections Update Pages",
					"action": "Update the navigation property pages in users",
					"description": "Update the navigation property pages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Get Pages Content",
					"value": "Users Onenote Notebooks Section Groups Sections Get Pages Content",
					"action": "Get content for the navigation property pages from users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Update Pages Content",
					"value": "Users Onenote Notebooks Section Groups Sections Update Pages Content",
					"action": "Update content for the navigation property pages in users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Pages Get Parent Notebook",
					"value": "Users Onenote Notebooks Section Groups Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Pages Get Parent Section",
					"value": "Users Onenote Notebooks Section Groups Sections Pages Get Parent Section",
					"action": "Get parentSection from users",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Get Parent Notebook",
					"value": "Users Onenote Notebooks Section Groups Sections Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Section Groups Sections Get Parent Section Group",
					"value": "Users Onenote Notebooks Section Groups Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from users",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks List Sections",
					"value": "Users Onenote Notebooks List Sections",
					"action": "List sections",
					"description": "Retrieve a list of section objects from the specified notebook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Create Sections",
					"value": "Users Onenote Notebooks Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Delete Sections",
					"value": "Users Onenote Notebooks Delete Sections",
					"action": "Delete navigation property sections for users",
					"description": "Delete navigation property sections for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Get Sections",
					"value": "Users Onenote Notebooks Get Sections",
					"action": "Get sections from users",
					"description": "The sections in the notebook. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Update Sections",
					"value": "Users Onenote Notebooks Update Sections",
					"action": "Update the navigation property sections in users",
					"description": "Update the navigation property sections in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections List Pages",
					"value": "Users Onenote Notebooks Sections List Pages",
					"action": "Get pages from users",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Create Pages",
					"value": "Users Onenote Notebooks Sections Create Pages",
					"action": "Create new navigation property to pages for users",
					"description": "Create new navigation property to pages for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Delete Pages",
					"value": "Users Onenote Notebooks Sections Delete Pages",
					"action": "Delete navigation property pages for users",
					"description": "Delete navigation property pages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Get Pages",
					"value": "Users Onenote Notebooks Sections Get Pages",
					"action": "Get pages from users",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Update Pages",
					"value": "Users Onenote Notebooks Sections Update Pages",
					"action": "Update the navigation property pages in users",
					"description": "Update the navigation property pages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Get Pages Content",
					"value": "Users Onenote Notebooks Sections Get Pages Content",
					"action": "Get content for the navigation property pages from users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Update Pages Content",
					"value": "Users Onenote Notebooks Sections Update Pages Content",
					"action": "Update content for the navigation property pages in users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Pages Get Parent Notebook",
					"value": "Users Onenote Notebooks Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Pages Get Parent Section",
					"value": "Users Onenote Notebooks Sections Pages Get Parent Section",
					"action": "Get parentSection from users",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Get Parent Notebook",
					"value": "Users Onenote Notebooks Sections Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Notebooks Sections Get Parent Section Group",
					"value": "Users Onenote Notebooks Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from users",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Users Onenote List Operations",
					"value": "Users Onenote List Operations",
					"action": "Get operations from users",
					"description": "The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/operations"
						}
					}
				},
				{
					"name": "Users Onenote Create Operations",
					"value": "Users Onenote Create Operations",
					"action": "Create new navigation property to operations for users",
					"description": "Create new navigation property to operations for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/operations"
						}
					}
				},
				{
					"name": "Users Onenote Delete Operations",
					"value": "Users Onenote Delete Operations",
					"action": "Delete navigation property operations for users",
					"description": "Delete navigation property operations for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Get Operations",
					"value": "Users Onenote Get Operations",
					"action": "Get operations from users",
					"description": "The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Update Operations",
					"value": "Users Onenote Update Operations",
					"action": "Update the navigation property operations in users",
					"description": "Update the navigation property operations in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote List Pages",
					"value": "Users Onenote List Pages",
					"action": "Get pages from users",
					"description": "The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages"
						}
					}
				},
				{
					"name": "Users Onenote Create Pages",
					"value": "Users Onenote Create Pages",
					"action": "Create new navigation property to pages for users",
					"description": "Create new navigation property to pages for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages"
						}
					}
				},
				{
					"name": "Users Onenote Delete Pages",
					"value": "Users Onenote Delete Pages",
					"action": "Delete navigation property pages for users",
					"description": "Delete navigation property pages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Get Pages",
					"value": "Users Onenote Get Pages",
					"action": "Get pages from users",
					"description": "The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Update Pages",
					"value": "Users Onenote Update Pages",
					"action": "Update the navigation property pages in users",
					"description": "Update the navigation property pages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Get Pages Content",
					"value": "Users Onenote Get Pages Content",
					"action": "Get content for the navigation property pages from users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Update Pages Content",
					"value": "Users Onenote Update Pages Content",
					"action": "Update content for the navigation property pages in users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Pages Get Parent Notebook",
					"value": "Users Onenote Pages Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Pages Get Parent Section",
					"value": "Users Onenote Pages Get Parent Section",
					"action": "Get parentSection from users",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Users Onenote List Resources",
					"value": "Users Onenote List Resources",
					"action": "Get resources from users",
					"description": "The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/resources"
						}
					}
				},
				{
					"name": "Users Onenote Create Resources",
					"value": "Users Onenote Create Resources",
					"action": "Create new navigation property to resources for users",
					"description": "Create new navigation property to resources for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/resources"
						}
					}
				},
				{
					"name": "Users Onenote Delete Resources",
					"value": "Users Onenote Delete Resources",
					"action": "Delete navigation property resources for users",
					"description": "Delete navigation property resources for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Get Resources",
					"value": "Users Onenote Get Resources",
					"action": "Get resources from users",
					"description": "The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Update Resources",
					"value": "Users Onenote Update Resources",
					"action": "Update the navigation property resources in users",
					"description": "Update the navigation property resources in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Get Resources Content",
					"value": "Users Onenote Get Resources Content",
					"action": "Get content for the navigation property resources from users",
					"description": "Get content for the navigation property resources from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Update Resources Content",
					"value": "Users Onenote Update Resources Content",
					"action": "Update content for the navigation property resources in users",
					"description": "Update content for the navigation property resources in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote List Section Groups",
					"value": "Users Onenote List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of sectionGroup objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups"
						}
					}
				},
				{
					"name": "Users Onenote Create Section Groups",
					"value": "Users Onenote Create Section Groups",
					"action": "Create new navigation property to sectionGroups for users",
					"description": "Create new navigation property to sectionGroups for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups"
						}
					}
				},
				{
					"name": "Users Onenote Delete Section Groups",
					"value": "Users Onenote Delete Section Groups",
					"action": "Delete navigation property sectionGroups for users",
					"description": "Delete navigation property sectionGroups for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Get Section Groups",
					"value": "Users Onenote Get Section Groups",
					"action": "Get sectionGroups from users",
					"description": "The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Update Section Groups",
					"value": "Users Onenote Update Section Groups",
					"action": "Update the navigation property sectionGroups in users",
					"description": "Update the navigation property sectionGroups in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Get Parent Notebook",
					"value": "Users Onenote Section Groups Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Get Parent Section Group",
					"value": "Users Onenote Section Groups Get Parent Section Group",
					"action": "Get parentSectionGroup from users",
					"description": "The section group that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups List Section Groups",
					"value": "Users Onenote Section Groups List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Get Section Groups",
					"value": "Users Onenote Section Groups Get Section Groups",
					"action": "Get sectionGroups from users",
					"description": "The section groups in the section. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups List Sections",
					"value": "Users Onenote Section Groups List Sections",
					"action": "List sections",
					"description": "Retrieve a list of onenoteSection objects from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Create Sections",
					"value": "Users Onenote Section Groups Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified section group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Delete Sections",
					"value": "Users Onenote Section Groups Delete Sections",
					"action": "Delete navigation property sections for users",
					"description": "Delete navigation property sections for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Get Sections",
					"value": "Users Onenote Section Groups Get Sections",
					"action": "Get sections from users",
					"description": "The sections in the section group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Update Sections",
					"value": "Users Onenote Section Groups Update Sections",
					"action": "Update the navigation property sections in users",
					"description": "Update the navigation property sections in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections List Pages",
					"value": "Users Onenote Section Groups Sections List Pages",
					"action": "Get pages from users",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Create Pages",
					"value": "Users Onenote Section Groups Sections Create Pages",
					"action": "Create new navigation property to pages for users",
					"description": "Create new navigation property to pages for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Delete Pages",
					"value": "Users Onenote Section Groups Sections Delete Pages",
					"action": "Delete navigation property pages for users",
					"description": "Delete navigation property pages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Get Pages",
					"value": "Users Onenote Section Groups Sections Get Pages",
					"action": "Get pages from users",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Update Pages",
					"value": "Users Onenote Section Groups Sections Update Pages",
					"action": "Update the navigation property pages in users",
					"description": "Update the navigation property pages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Get Pages Content",
					"value": "Users Onenote Section Groups Sections Get Pages Content",
					"action": "Get content for the navigation property pages from users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Update Pages Content",
					"value": "Users Onenote Section Groups Sections Update Pages Content",
					"action": "Update content for the navigation property pages in users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Pages Get Parent Notebook",
					"value": "Users Onenote Section Groups Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Pages Get Parent Section",
					"value": "Users Onenote Section Groups Sections Pages Get Parent Section",
					"action": "Get parentSection from users",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Get Parent Notebook",
					"value": "Users Onenote Section Groups Sections Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Section Groups Sections Get Parent Section Group",
					"value": "Users Onenote Section Groups Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from users",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Users Onenote List Sections",
					"value": "Users Onenote List Sections",
					"action": "List sections",
					"description": "Retrieve a list of section objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections"
						}
					}
				},
				{
					"name": "Users Onenote Create Sections",
					"value": "Users Onenote Create Sections",
					"action": "Create new navigation property to sections for users",
					"description": "Create new navigation property to sections for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections"
						}
					}
				},
				{
					"name": "Users Onenote Delete Sections",
					"value": "Users Onenote Delete Sections",
					"action": "Delete navigation property sections for users",
					"description": "Delete navigation property sections for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Get Sections",
					"value": "Users Onenote Get Sections",
					"action": "Get sections from users",
					"description": "The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Update Sections",
					"value": "Users Onenote Update Sections",
					"action": "Update the navigation property sections in users",
					"description": "Update the navigation property sections in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Sections List Pages",
					"value": "Users Onenote Sections List Pages",
					"action": "Get pages from users",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Users Onenote Sections Create Pages",
					"value": "Users Onenote Sections Create Pages",
					"action": "Create new navigation property to pages for users",
					"description": "Create new navigation property to pages for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Users Onenote Sections Delete Pages",
					"value": "Users Onenote Sections Delete Pages",
					"action": "Delete navigation property pages for users",
					"description": "Delete navigation property pages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Sections Get Pages",
					"value": "Users Onenote Sections Get Pages",
					"action": "Get pages from users",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Sections Update Pages",
					"value": "Users Onenote Sections Update Pages",
					"action": "Update the navigation property pages in users",
					"description": "Update the navigation property pages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Onenote Sections Get Pages Content",
					"value": "Users Onenote Sections Get Pages Content",
					"action": "Get content for the navigation property pages from users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Sections Update Pages Content",
					"value": "Users Onenote Sections Update Pages Content",
					"action": "Update content for the navigation property pages in users",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Onenote Sections Pages Get Parent Notebook",
					"value": "Users Onenote Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Sections Pages Get Parent Section",
					"value": "Users Onenote Sections Pages Get Parent Section",
					"action": "Get parentSection from users",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Users Onenote Sections Get Parent Notebook",
					"value": "Users Onenote Sections Get Parent Notebook",
					"action": "Get parentNotebook from users",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Users Onenote Sections Get Parent Section Group",
					"value": "Users Onenote Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from users",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Delete Onenote"
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
						"Users Onenote"
					],
					"operation": [
						"Users Delete Onenote"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Get Onenote"
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
						"Users Onenote"
					],
					"operation": [
						"Users Get Onenote"
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
						"Users Onenote"
					],
					"operation": [
						"Users Get Onenote"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Update Onenote"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Update Onenote"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Notebooks"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Notebooks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Notebooks"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Notebooks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Notebooks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Delete Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Get Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Get Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Delete Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Delete Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Delete Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Get Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Get Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Delete Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Notebooks Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Operations"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Resources"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Resources Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Resources Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Resources Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sectionGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Section Groups"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Delete Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Delete Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Sections"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onenote/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Delete Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Pages"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Pages Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Pages Get Parent Section"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Parent Notebook"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Parent Section Group"
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
						"Users Onenote"
					],
					"operation": [
						"Users Onenote Sections Get Parent Section Group"
					]
				}
			}
		},
];
