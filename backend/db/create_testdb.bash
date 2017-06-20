SCRIPT_PATH=$(dirname `which $0`)
echo $SCRIPT_PATH
psql -f backend/db/create_tables.sql -U hdorothea -d movielistsdh
psql -f backend/db/fill_tables.sql -U hdorothea -d movielistsdh
